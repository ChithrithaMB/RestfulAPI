import './home.css';
import { useStates} from '../../States';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { Card } from 'react-bootstrap'
function Home() {
    const { getAllWatch,watch,deletefromDB,AddButton } = useStates();
    
    useEffect(() => {
        getAllWatch();
    },);
  
    return (
        
        <>
        <div className='background-1'>
        <Card className='watch-card-1' > 
        
            <span className='Watch-1'>Watch</span>
            <button className='add-btn' onClick={AddButton}>Add a watches</button>
        </Card>
        
         <motion.div className="watch-page">
           {watch.map((watch,i) => {
            return(
                <>
                
                <motion.div layout key={i} className="watch-div">
                <img src="https://img.joomcdn.net/0becb47a4b97dd767004acbdd4b91f1c8c09cf96_original.jpeg" className='brand-1' alt="Avatar"></img>
                    <span className='watch-brand'><b> {watch.brand}</b></span>
                    <span className='watch-cost'>Cost    :{watch.cost}</span>
                    <span className='watch-instock'>Instock : {watch.instock}</span>
                    <span className='watch-saled'>Saled   : {watch.saled}</span>
                    <button className='watch-delete-btn' onClick={function (e) {deletefromDB(watch.id) }}>Delete</button>
                    {/* <button className='gym-update-btn'>Update</button> */}
                    
                </motion.div>
                
                </>
            )
        })}
        </motion.div>
        </div>
        </>
    );
};
export default Home;