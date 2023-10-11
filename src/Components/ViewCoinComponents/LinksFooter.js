import { LinkPageRef, LinkPageBox, OpenLinkIcon, LinksContainer, CopyLinkButton, CopyLinkIcon } from "Pages/ViewCoin/ViewCoin.style"
import openLinkIcon from 'images/copy-link-icon.png'
import copyLinkIcon from 'images/Untitled 2/Vector-1.png'
import copyLinkIcon2 from 'images/Untitled 2/Vector.png'

function LinksFooter(props) {
    const { blockchair, homepage, tokenView } = props

    const copyToClipBoard = (str) => {
        navigator.clipboard.writeText(str).then(() => { 
        alert("Link copied to clipboard");
        });
    }
    return (
        <LinksContainer>
            {/* Blockchair Box */}
            <LinkPageBox className='mr-auto'>
                <LinkPageRef href={blockchair} target="_blank" >
                    <OpenLinkIcon src={openLinkIcon}  />
                </LinkPageRef>
                {blockchair}
                <CopyLinkButton onClick={() => {
                    copyToClipBoard(blockchair)
                }}>
                    <CopyLinkIcon className='absolute' src={copyLinkIcon}/>
                    <CopyLinkIcon className='mt-1 ml-1' src={copyLinkIcon2}/>
                </CopyLinkButton>
            </LinkPageBox>
            {/* Homepage Box */}
            <LinkPageBox>
                <LinkPageRef href={homepage} target="_blank" >
                    <OpenLinkIcon src={openLinkIcon}  />
                </LinkPageRef>
                {homepage}
                <CopyLinkButton onClick={() => {
                    copyToClipBoard(homepage)
                }}>
                    <CopyLinkIcon className='absolute' src={copyLinkIcon}/>
                    <CopyLinkIcon className='mt-1 ml-1' src={copyLinkIcon2}/>
                </CopyLinkButton>
            </LinkPageBox>
            {/* Token View Box */}
            <LinkPageBox className="ml-auto">
                <LinkPageRef href={tokenView} target="_blank" >
                    <OpenLinkIcon src={openLinkIcon}  />
                </LinkPageRef>
                {tokenView}
                <CopyLinkButton onClick={() => {
                    copyToClipBoard(tokenView)
                }}>
                    <CopyLinkIcon className='absolute' src={copyLinkIcon}/>
                    <CopyLinkIcon className='mt-1 ml-1' src={copyLinkIcon2}/>
                </CopyLinkButton>
            </LinkPageBox>

        </LinksContainer>
    )
}

export default LinksFooter