const Home = () => {
    const title = "My Home Page";
    const obj = { name: "sumit", age: 35 };
    const courses = ["A","B","C","D"]
    return (
        <div>
            <h2> {title}</h2>
            <p> {obj.name} is {obj.age} year old</p>
            <div>
                {courses.length > 0 ? 
                  <>
                    <h4> Courses</h4>
                     <ul>
                        {courses.map((val, ind) =>
                            <li key={ind}> {val} </li>
                        )}
                    </ul>
                    </>
                : <p> No Course found</p>}

            </div>
        </div>
    )
}
export default Home;