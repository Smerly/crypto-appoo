
import copyLinkIcon from 'images/copy-link-icon.png'
import { CopyLinkIcon, LinkPageRef, TitleSquare  } from 'Pages/ViewCoin/ViewCoin.style'

function TitleBox(props) {
    const { name, homepage, symbol } = props
    return (
        <div className='flex m-20 lg:m-0 flex-col h-80 items-center'>
            <TitleSquare>
                <h2 className='text-2xl'>{name}</h2>
                <h2 className='text-gray-400'>({symbol})</h2>
            </TitleSquare>
            <LinkPageRef href={homepage} target="_blank" >
                <CopyLinkIcon src={copyLinkIcon}  />
                {homepage}
            </LinkPageRef>
        </div>
    )
}

export default TitleBox