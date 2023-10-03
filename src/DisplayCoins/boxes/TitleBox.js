
function TitleBox(props) {
    const { name, homepage, symbol } = props
    return (
        <div className='flex m-20 lg:m-0 flex-col h-80 items-center'>
            <div className="title-box m-20 lg:m-0 ">
                <h2 className='text-2xl'>{name}</h2>
                <h2 className='text-gray-400'>({symbol})</h2>
            </div>
            <a href={homepage} target="_blank" className='link-box flex flex-row justify-center items-center w-44 mt-auto'>{homepage}</a>
        </div>
    )
}

export default TitleBox