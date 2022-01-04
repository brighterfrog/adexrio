//SPDX-License-Identifier: UNLICENSED

//if import fails, compiles fine
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
pragma solidity >=0.8.0 <0.9.0;

contract VeNFT is ERC1155 {
    address public contractOwner;
    uint256 public nftTypeCount;
    
    modifier onlyGovernance() {
        require(msg.sender == contractOwner, "only governance can call this");        
        _;
    }

    constructor(address governance_) public ERC1155("https://localhost/api/item/{id}.json") {
        contractOwner = governance_;
        nftTypeCount = 0;
    }
    
    function addNewVeLabNFT(uint256 initialSupply, bytes calldata data) external {
        nftTypeCount++;
        uint256 _nftClassId = nftTypeCount;

        _mint(msg.sender, _nftClassId, initialSupply, data);        
    }
}