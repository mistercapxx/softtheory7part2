import React from 'react'
interface HelloCourseProps { ///type
    name: string;
}
function HelloCourse(props: HelloCourseProps) {
  return (
    <div>Hello {props.name}</div>
  )
}

export default HelloCourse;