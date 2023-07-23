import  {useLocation,useNavigate} from "react-router-dom"
const Home = ()=>{
    const location = useLocation()
    const navigateTo = useNavigate()
    const revealMessage = async()=>{
       const account = location.state.address
       const res = await fetch(`http://localhost:4000/members`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({from:account})
       })
       const data = await res.json();
       if(data.status == 200){
          navigateTo("/members")
       }else{
         window.alert("You Don't Have NFT Of This Address:0xA4924001Dde359Dc5aaF896b236aAE5b18d5E8C0")
       }
    }
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px', backgroundColor: '#f2f2f2' }}>
      <p style={{ fontSize: '18px', color: '#333' }}>If you have NFT of the Contract "0xA4924001Dde359Dc5aaF896b236aAE5b18d5E8C0", then you can reveal this:</p>
      <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 20px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '10px 0', cursor: 'pointer', borderRadius: '5px' }} onClick={revealMessage}>Reveal</button>
    </div>
    

     
      )
}
export default Home