import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import logo from "../assets/logo.png";
import tick from "../assets/tick.png";
import like from "../assets/like.png";
import dumbell from "../assets/dumbell.png";
import cam from "../assets/cam_btn.png";
import location from "../assets/location_btn.png";

const Message = ({
  name,
  message,
  time,
  reactCount,
  isFirst,
  isCurrentUser,
  onReact,
  undoReact,
  reacted,
}) => {
  const bubbleStyle = isCurrentUser ? styles.bubbleCurrentUser : styles.bubble;
  const messageStyle = isCurrentUser
    ? styles.messageCurrentUser
    : styles.message;
  const nameStyle = isCurrentUser ? styles.nameCurrentUser : styles.name;

  const handleReact = () => {
    if (!reacted) {
      onReact();
    }
  };

  const handleUndoReact = () => {
    undoReact();
  };

  return (
    <View style={[bubbleStyle, isFirst && styles.firstBubble]}>
      {name && <Text style={nameStyle}>{name}</Text>}
      {isFirst && <Image source={dumbell} style={styles.dumbell} />}
      {message.includes("https://maps.app.goo.gle") ? (
        <TouchableOpacity onPress={() => handleLinkPress(message)}>
          <Text style={styles.messageLink}>{message}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={messageStyle}>{message}</Text>
      )}
      {time && <Text style={styles.time}>{time}</Text>}
      {reactCount && (
        <View style={styles.react}>
          <TouchableOpacity
            onPress={handleReact}
            onLongPress={handleUndoReact}
            style={[
              styles.reactCount,
              reacted && { backgroundColor: "#484844" },
            ]}
            disabled={reacted}
          >
            <Image source={tick} style={styles.reactIcon} />
            <Text
              style={[
                styles.reactText,
                reacted && { color: "#DFDEDF" },
              ]}
            >
              {reactCount.tick}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleReact}
            onLongPress={handleUndoReact}
            style={[
              styles.reactCount,
              reacted && { backgroundColor: "#484844" },
            ]}
            disabled={reacted}
          >
            <Image source={like} style={styles.reactIcon} />
            <Text
              style={[
                styles.reactText,
                reacted && { color: "#DFDEDF" },
              ]}
            >
              {reactCount.like}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const ChatScreen = ({ navigation }) => {
  const [typingMessage, setTypingMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Arijit Mukherjee",
      message:
        "See my real-time location on Maps: https://maps.app.goo.gle/Ka3879MazeyQx3",
      time: "10.00 AM",
      reactCount: {
        tick: 6,
        like: 4,
      },
      reacted: false,
    },
  ]);

  const handleSendMessage = () => {
    if (typingMessage.trim() !== "") {
      const newMessage = {
        name: "Your Name",
        message: typingMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        reactCount: {
          tick: 0,
          like: 0,
        },
        reacted: false,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setTypingMessage("");
    }
  };

  const handleReact = (index, reactionType) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      const message = updatedMessages[index];
      if (reactionType === "tick") {
        message.reactCount.tick++;
        message.reactCount.like = 0;
      } else if (reactionType === "like") {
        message.reactCount.like++;
        message.reactCount.tick = 0;
      }
      message.reacted = true;
      return updatedMessages;
    });
  };

  const handleUndoReact = (index) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      const message = updatedMessages[index];
      message.reactCount.tick = 0;
      message.reactCount.like = 0;
      message.reacted = false;
      return updatedMessages;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.chatView}
        contentContainerStyle={styles.chatContent}
        ref={(ref) => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() => {
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >
        {messages.map((message, index) => (
          <Message
            key={index}
            name={message.name}
            message={message.message}
            time={message.time}
            reactCount={message.reactCount}
            isFirst={index === 0}
            isCurrentUser={message.name === "Your Name"}
            onReact={() => handleReact(index, "tick")}
            undoReact={() => handleUndoReact(index)}
            reacted={message.reacted}
          />
        ))}
      </ScrollView>

      <View style={styles.inputSection}>
        <Image source={cam} style={styles.btn} />
        <TextInput
          style={styles.input}
          placeholder="Write a message"
          placeholderTextColor="#9A9B82"
          value={typingMessage}
          onChangeText={setTypingMessage}
          onSubmitEditing={handleSendMessage}
        />
        <Image source={location} style={styles.btn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#101010",
  },
  dumbell: {
    width: "100%",
    height: 140,
    borderRadius: 8,
  },
  nameCurrentUser: {
    color: "#F0C045",
    textAlign: "right",
  },
  react: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
  },
  reactCount: {
    borderWidth: 1,
    borderColor: "#484844",
    borderRadius: 10,
    padding: 7,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  reactIcon: {
    marginRight: 5,
  },
  reactText: {
    color: "#DFDEDF",
    fontSize: 17,
  },
  chatView:{
    flex: 1,
    marginBottom: "20%",
  },
  messageLink: {
    paddingTop: 5,
    color: "#DFDEDF",
  },
  chatContent: {
    paddingVertical: 20,
  },
  lastBubble: {
    marginBottom: 20,
  },
  time: {
    color: "#8D8D8D",
    paddingTop: 5,
    position: "absolute",
    right: 15,
    bottom: 8,
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    marginRight: "-8%",
    marginLeft: "3%",
    flex: 1,
    paddingHorizontal: 0,
  },
  btn: {
    width: 40,
    height: 40,
  },
  input: {
    height: 45,
    flex: 1,
    marginLeft: 14,
    marginRight: 14,
    fontFamily: "System",
    fontWeight: "500",
    fontSize: 16,
    color: "#fff",
    backgroundColor: "rgb(28, 28, 30)",
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    maxWidth: "100%",
    elevation: 1,
  },
  name: {
    color: "#F0C045",
    paddingBottom: 5,
  },
  bubble: {
    width: "70%",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: "#362f2f",
    padding: 12,
    marginBottom: 10,
  },
  bubbleCurrentUser: {
    width: "70%",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: "#362f2f",
    padding: 15,
    marginBottom: 10,
    alignSelf: "flex-end",
  },
  message: {
    color: "#DFDEDF",
    fontSize: 17,
  },
  messageCurrentUser: {
    color: "#DFDEDF",
    fontSize: 17,
    textAlign: "right",
  },
  profileIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    top: -45,
    right: 20,
  },
});

export default ChatScreen;