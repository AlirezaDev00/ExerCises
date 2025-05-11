import { useState } from "react";

function Course_Hoc(Original_Component, course_title, course_price) {
  const new_comp = () => {
    const [course, set_course] = useState(course_title);

    const [price, set_price] = useState(course_price);

    const add_price = () => {
      set_price((prev_price) => prev_price * 2);
    };

    return (
      <Original_Component
        title={course}
        price={price}
        add_price={add_price}
      ></Original_Component>
    );
  };

  return new_comp;
}

export default Course_Hoc;
