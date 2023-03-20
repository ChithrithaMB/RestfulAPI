import { createContext, useContext, useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import swal from "sweetalert";
import axios from "./axios";
const Context = createContext();
export const States = ({ children }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const [brand, setBrand] = useState("");
    const [cost, setWatchcost] = useState("");
    const [instock, setInstock] = useState("");
    const [saled, setSaled] = useState("");

    const [pwerror, setPwerror] = useState("");
    const [mailerror, setmailerror] = useState("");
    const [unerror, setunerror] = useState("");
    const [moberror, setMoberror] = useState("");

    const [branderror, setbranderror] = useState("");
    const [costerror, setcosterror] = useState("");
    const [instockerror, setinstockerror] = useState("");
    const [salederror, setsalederror] = useState("");

    const [watch, setWatch] = useState([]);
    var navigate = useNavigate();

    const passMatch = (e) => {
      setPwerror("");
      setMoberror("");
      setmailerror("");
      setunerror("");
      if(username===""){
          setunerror("*Username required")}
      if(mobile===""){
           setMoberror("*Mobile Number required")}
      if(email===""){
          setmailerror("*Email required")}
      if(password===""){
          setPwerror("*Password required")}
      else{
        signUp();
      }
  };
  const getAllWatch = () => {
    fetch('http://localhost:8080/watch/all')
      .then((res) => res.json())
      .then((result) => {
      setWatch(result);
        console.log(result);
      });
     };

     function refreshPage() {
      window.location.reload(false);
    }

    const deletefromDB = (id) => {
      swal({
        title: "Conformation",
        text: "Are you sure you want to delete this product ?",
        icon: "warning",
        buttons: true,
      })
      .then((willDelete) => 
      {
        if(willDelete){
          axios.delete('/watch/delete', { params: { id:id } }).then((response)=>{
            console.log(response);
            refreshPage();
          });
        }
      });
    };

const AddButton = (e) => {
  Swal.fire(
    'Do you wish to add a new watch?',
    'Add your watches',
    'question'
  )
  .then((response) => {
    console.log(response);
    navigate("/add");
  })
};


const addMatch = (e) => {
    setbranderror("");
    setcosterror("");
    setinstockerror("");
    setsalederror("");
    if(brand===""){
      setbranderror("*Brand required")}
    if(cost===""){
      setcosterror("*Cost required")}
    if(instock===""){
      setinstockerror("*Number of watches in stock required")}
    if(saled===""){
      setsalederror("*Number of watches saled required")}
    else{
      AddWatch();
    }

};




const logincheck = (e) => {
  setPwerror("");
  setmailerror("");
  if(email===""){
    setmailerror("*Email required")}
  if(password===""){
    setPwerror("*Password required")}
  else{
    signIn()

  }
};
// database post
const sendtoDB = (e) => {
  const users = { //users table name
    username: username,
    mobile: mobile,
    email: email,
    password: password,
  };
  axios.post('/User/signup',users)
  .then((response)=>
  {
    console.log(response);
  });
  };

const AddWatch = (e) => {
  const watch = {
    brand: brand,
    cost: cost,
    instock: instock,
    saled: saled,
  };
  axios.post('/watch/create',watch)
  .then((response)=>
  {
    swal("Good job!", "You added a watch details!", "success");
    console.log(response);
    navigate("/home");
  });
  };

const signIn = (e) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      sendtoDB();
      navigate("/home");
    })
    .catch((error) => {
      if(error.code==="auth/wrong-password")
      alert("The password is incorrect. Please enter the correct password");
      else if(error.code === "auth/user-not-found")
      {
        swal({
          title: "User Record not found",
          text: "Do you wish to create a new account ?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if(willDelete){
            setEmail("");
            setPassword("");
            navigate("/signup")
          }
        });
      }
      else if(error.code === "auth/invalid-email")
      alert("The Email is invalid ! Please enter a valid Email ID")
      console.log(error);
    });
};

// signup function

const signUp = (e) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      sendtoDB();
      navigate("/home");

    })
    .catch((error) => {
      if(error.code === "auth/email-already-in-use")
      alert("The email address is already in use by another account")
      else if(error.code === "auth/invalid-email")
      alert("The Email is invalid ! Please enter a valid Email ID")
      console.log(error);
    });   
};

  return(
    <Context.Provider value={{
        email,
        setEmail,
        password,
        setPassword,
        setMobile,
        mobile,
        signIn,
        signUp,
        AddWatch,
        passMatch,
        logincheck,
        pwerror,
        setPwerror,
        unerror,
        setunerror,
        mailerror,
        setmailerror,
        username,
        setUsername,
        setMoberror,
        sendtoDB,
        moberror,
        addMatch,
        brand,
        setBrand,
        cost,
        setWatchcost,
        instock,
        setInstock,
        saled,
        setSaled,
        branderror,
        setbranderror,
        costerror,
        setcosterror,
        instockerror,
        setinstockerror,
        salederror,
        setsalederror,
        watch,
        setWatch,
        deletefromDB,
        getAllWatch,
        AddButton

    }}
    >{children}
    </Context.Provider>
);
};
export const useStates = () => useContext(Context);