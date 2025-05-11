import Course_Hoc from "../Course_Hoc/Course_Hoc";

function Js_Course({title , price , add_price}) {
  return (
    <div className="course">
      <h1>Course : {title}</h1>
      <button type="button" onClick={() => add_price()}>Add Course Price (Now Price: {price})</button>
    </div>
  );
}

export default Course_Hoc(Js_Course , "Js Course" , 4_000_000)
