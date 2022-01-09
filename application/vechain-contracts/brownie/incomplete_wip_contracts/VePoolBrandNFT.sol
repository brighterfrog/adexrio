pragma solidity >=0.4.22 <0.9.0;

import "./../../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./../../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./../../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "./../../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract VEBRAND is ERC721, ERC721URIStorage, Ownable {

    string _nftBaseUri;
    mapping(string => Brand) _mintedBrands;

    modifier canMintBrand(string memory _brandName) {
        require(
            !_mintedBrands[_brandName].isMinted,
            "This VeBrand already exists"
        );       
        _;
    }

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("VeBrand", "vBRND") {
         _nftBaseUri = "ipfs://";
    }

    struct Brand {
        string name;
        bool isMinted;
    }

    function _baseURI() override internal view virtual returns (string memory) {
        string memory result = _nftBaseUri;
        return result;
    }
      
    // Internal
    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    // public
    function safeMint(address to, uint256 tokenId) external payable returns (bool result) { 
        _safeMint(to, tokenId);
        // _setTokenURI(tokenId, );
        return true;
    }

    // read only
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }        
    
}
