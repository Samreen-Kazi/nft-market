import NFTCard from "components/NFTCard";
import useNFTMarket from "state/nft-market";
import { NFT } from "state/nft-market/interfaces";

const OwnedPage = () => {
  const { ownedNFTs, ownedListedNFTs } = useNFTMarket();

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-wrap">
      {ownedNFTs?.map((nft: NFT) => <NFTCard nft={nft} className="mr-2 mb-2" key={nft.id}/>)}
    </div>

    {ownedListedNFTs && ownedListedNFTs.length > 0 && (
    <>
        <div className="relative my-2 h-[1px] w-full flex-shrink-0 bg-black">
          <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 transform bg-white px-2 font-mono font-semibold">
            LISTED
          </div>
        </div>
        <div className="flex flex-wrap">
        {ownedListedNFTs?.map((nft: NFT) => <NFTCard nft={nft} className="mr-2 mb-2" key={nft.id}/>)}
    </div>
    
    </>
    )}  
    </div>
  );
};

export default OwnedPage;
