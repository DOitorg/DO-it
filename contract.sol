pragma solidity ^0.8.0;

contract InvestmentContract {
    mapping(address => uint256) private investments;
    address[] private validUsers;
    uint256 public totalInvestmentAmount;
    uint256 public totalInvestedUserCount;
    address private admin;

    modifier onlyValidUser() {
        require(
            investments[msg.sender] == 0,
            "User is not allowed to reinvest."
        );
        _;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can call this function.");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function invest(uint256 amount) external onlyValidUser returns (bool) {
        require(amount > 1, "Amount should be greater than 1 ETH");

        uint256 investedAmount = amount - 1;
        investments[msg.sender] = investedAmount;
        validUsers.push(msg.sender);
        totalInvestmentAmount += investedAmount;
        totalInvestedUserCount++;

        // Transfer 1 ETH to admin's wallet
        address payable adminWallet = payable(admin);
        adminWallet.transfer(1 ether);

        return true;
    }

    function removeUser() external onlyAdmin returns (string memory) {
        require(investments[msg.sender] > 0, "User has no investment.");

        for (uint256 i = 0; i < validUsers.length; i++) {
            if (validUsers[i] == msg.sender) {
                delete validUsers[i];
                break;
            }
        }

        return "User removed successfully.";
    }

    function distributeFunds() external onlyAdmin returns (string memory) {
        uint256 totalUsers = validUsers.length;
        require(totalUsers > 0, "No valid users to distribute funds.");
        uint256 amountPerUser = totalInvestmentAmount / totalUsers;

        for (uint256 i = 0; i < validUsers.length; i++) {
            address payable user = payable(validUsers[i]);
            user.transfer(amountPerUser);
        }

        return "Funds distributed successfully.";
    }

    function getTotalInvestment() external view returns (uint256) {
        return totalInvestmentAmount;
    }

    function getMyInvestment() external view returns (uint256) {
        return investments[msg.sender];
    }

    function getTotalUserCount() external view returns (uint256) {
        return totalInvestedUserCount;
    }

    function getValidUsersCount() external view returns (uint256) {
        return validUsers.length;
    }

    function getUInvalidUsersCount() external view returns (uint256) {
        return totalInvestedUserCount - validUsers.length;
    }

    function isUserValid() external view returns (bool) {
        // find the user in validUsers array and return true if found
        for (uint256 i = 0; i < validUsers.length; i++) {
            if (validUsers[i] == msg.sender) {
                return true;
            }
        }
        return false;
    }
}
