
function NavBar(){
return(
<>
<main className=" bg-white h-auto w-full   box-shadow-lg rounded-md   ">
    <header className="flex justify-between">
        <div className="title flex justify-between ml-5">
            <h1 className="text-[1rem] md:text-[2.5rem] text-blue-600 font-bold">WALWebScraper</h1>
        </div>
        <div className="Links flex gap-5 mr-5">
            <a href="https://github.com/AWERDdev" className="GITRepo text-[1rem] md:text-[1.5rem] text-gray-800 font-bold ">AWERDdev</a>
            <a href="https://github.com/AWERDdev/PythonProject" className="GITRepo text-[1rem] md:text-[1.5rem] text-gray-800 font-bold ">AppRepo</a>
        </div>
    </header>
</main>
</>
)

}
export default NavBar