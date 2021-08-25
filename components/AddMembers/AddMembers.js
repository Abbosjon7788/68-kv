import Link from 'next/link';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setMembers } from '../../redux/reducers/reducers';
import styles from './AddMembers.module.scss';


const AddMembers = (props) => {

     const { members, setMembers } = props;

     const [inputValue, setInputValue] = useState('');
     const [data, setData] = useState([]);
     const [selectedIndex, setSelectedIndex] = useState(null);

     const handleChange = (e) => {
          const value = e.target.value;
          setInputValue(value);
     }

     const submit = () => {
          // setData([...data, inputValue]);
          if (selectedIndex === null) {
               if (inputValue) {
                    setData([...data, inputValue]);
               }
          } else {
               data.splice(selectedIndex, 1, inputValue);
               setData([...data]);
               setSelectedIndex(null);
          }

          setInputValue('');
          setMembers(data);

     };

     const pressEnter = (e) => {
          if (e.key === 'Enter') {
               submit();
          }
     };

     const deleteMember = (index) => {
          data.splice(index, 1);
          setData([...data]);
          setMembers(data);
          setInputValue('');
     };

     const editMember = (index) => {
          setInputValue(data[index]);
          setSelectedIndex(index);
          console.log(inputValue);
     }
     // console.log(inputValue);

     return (
          <>
               <div className={`${styles.input} flex items-center mx-auto shadow-lg`}>
                    <input type="text" value={inputValue} onChange={(e) => { handleChange(e) }} onKeyPress={pressEnter} className={`focus:outline-none sm:text-base text-sm capitalize w-3/4 sm:px-6 px-4 sm:h-14 sm-400:h-11 h-10 rounded-l-md`} placeholder="Input member's name..." />
                    <button type="button" onClick={() => submit()} className="flex items-center justify-center w-1/4 sm:px-6 px-4 sm:h-14 sm-400:h-11 h-10 text-center rounded-r-md font-semibold bg-gray-800 hover:bg-gray-900 text-white sm:text-lg text-sm tracking-widest">Add</button>

               </div>
               <div className="md:mt-12 mt-6 md:w-10/12 w-full mx-auto">
                    <div className="flex flex-wrap justify-center sm-400:-mr-4 -mr-8">
                         {
                              data.map((member, index) => (
                                   <div key={index} className="w-32 relative sm-400:mr-4 mr-8 mt-4 bg-gray-800 hover:bg-gray-900 font-poppins tracking-tight capitalize rounded-md shadow-lg">
                                        <h1 onClick={() => editMember(index)} className="text-center text-white w-full px-4 py-2">{member}</h1>
                                        <span onClick={() => deleteMember(index)} className="absolute cursor-pointer shadow-2xl border shadow-inner text-gray-800 hover:text-red-800 bg-white rounded-full -right-2 -top-2 flex items-center justify-center h-6 w-6 font-semibold text-2xl">&times;</span>
                                   </div>
                              ))
                         }
                         {
                              data.length > 0 ? (
                                   <div className="w-full mt-6 mr-4">
                                        <Link href='/'>
                                             <a className="block text-white sm:w-48 w-52 text-center text-lg sm:ml-auto sm:mr-0 mx-auto bg-gray-800 hover:bg-gray-900 font-poppins px-4 py-2 rounded-md cursor-pointer">Add Products</a>
                                        </Link>
                                   </div>
                              ) : ''
                         }
                    </div>
               </div>

          </>
     )
}

export default connect(({ reducers: { members } }) => ({ members }), { setMembers })(AddMembers);
