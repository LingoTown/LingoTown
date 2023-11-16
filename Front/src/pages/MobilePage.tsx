export const MobilePage = () => {

    return(
        <div>
            <div
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }} 
            className="absolute inset-0 bg-black opacity-50 z-0">
        </div>

        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center z-0" style={{ backgroundImage: `url('${import.meta.env.VITE_S3_URL}Introduce/bgggg.png')`, cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }}>
            <div className="text-center z-0">
                <div>
                    <h1 className="text-6xl font-bold text-[#fff] font-['passero-one']">저희 서비스는 모바일 환경을 제공하지 않습니다.</h1>
                    <br /><br /><br />
                    <h2 className="text-7xl mt-2 font-extrabold text-[#FFE58A] font-['passero-one']">PC로 접속해주세요!</h2>
                </div>
            </div>
        </div>

        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div>저희 서비스는 모바일 환경을 제공하지 않습니다. </div>
            <div>PC로 접속해주세요!</div>
        </div>
        </div>
    )
}

