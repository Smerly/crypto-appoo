
import copyLinkIcon from 'images/copy-link-icon.png'
import { CopyLinkIcon, LinkPageRef, TitleSquare, TitleBoxWrapper  } from 'Pages/ViewCoin/ViewCoin.style'

function TitleBox(props) {
    const { name, homepage, symbol } = props
    return (
        <TitleBoxWrapper>
            <TitleSquare>
                <h2 className='text-2xl'>{name}</h2>
                <h2 className='text-gray-400'>({symbol})</h2>
            </TitleSquare>
            <LinkPageRef href={homepage} target="_blank" >
                <CopyLinkIcon src={copyLinkIcon}  />
                {homepage}
            </LinkPageRef>
        </TitleBoxWrapper>
    )
}

export default TitleBox