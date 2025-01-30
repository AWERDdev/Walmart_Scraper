
function NavBar(){
return(
<>
<main className=" bg-white h-auto w-[full]   box-shadow-lg rounded-md min-w-[650px]  ">
    <header className="flex justify-between">
        <div className="title flex justify-between ml-5">
            <h1 className="text-[2.5rem] text-blue-600 font-bold">Web Scraper</h1>
        </div>
        <div className="Links flex gap-5 mr-5">
            <a href="https://github.com/AWERDdev" className="GITRepo text-blue-600 font-bold ">AWERDdev</a>
            <a href="https://github.com/AWERDdev/PythonProject" className="GITRepo text-blue-600 font-bold ">AppRepo</a>
        </div>
    </header>
</main>
</>
)

}
export default NavBar