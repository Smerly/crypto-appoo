import { EachAssetWrapper, AssetImage } from "./Assets.style"
import { handleAwaitPrim } from "utils/handleAwait"
function EachAsset(props) {
    const { asset } = props
    return (
        <EachAssetWrapper>
            <AssetImage src={handleAwaitPrim(asset, 'image')}/>
        </EachAssetWrapper>
    )
}

export default EachAsset