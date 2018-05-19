import React from 'react';
import CourseRow from "../component/CourseRow";
class CourseList extends React.Component {
   constructor() {
       super();
   }
   render() {
       return (
           <div>
             <h2>Course List</h2>
             <table>
               <thead>
               <tr>
                   <th>Title</th>
               </tr>
               </thead>
               <tbody>
                    <CourseRow/>
               </tbody>
             </table>
           </div>
       )
   }
}
export default CourseList;
