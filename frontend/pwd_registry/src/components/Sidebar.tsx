
const Sidebar: React.FC = () => {
    return <>
        <div className="px-3 w-1/5 ">
            <div className="text-2xl font-bold mb-5 mt-3">Title</div>
            
            <div className="flex flex-col">
                <a href="" className="px-2 py-2 bg-amber-400 rounded-md">Link 1</a>
                <a href="" className="px-2 py-2 rounded-md">Link 1</a>
                <a href="" className="px-2 py-2 rounded-md">Link 1</a>
                <a href="" className="px-2 py-2 rounded-md">Link 1</a>
            </div>
        </div>
    </>
}

export default Sidebar;