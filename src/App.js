import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import MyCompaniesInfo from './components/MyCompaniesInfo/myCompaniesInfo'
import Company from './components/Company/Company';
import Snackbar from './components/Snackbar'
import EmptyData from './components/emptyData/EmptyData'
import { baseURL } from './utils/baseUrl';
import Spinner from './components/Spinner/Spinner'

function App() {

  const [companiesList, setCompaniesList] = useState([])
  const [alert, setAlert] = useState({ bgc: '', open: false, message: '' })
  const [noData,setNoData] = useState(false)
  const [btnSpinner,setBtnSpinner] = useState('')

  useEffect(() => {
    getCompaniesList()
  }, [])

  const getCompaniesList = () => {
    axios.get(`${baseURL}api/companies/my`).then((res) => {
      if(res.data && res.data.length>0){
        setCompaniesList([...res.data])
      }
      else{
        setNoData(true)
      }
    }).catch(()=>{
      setNoData(true)
      setAlert({
        bgc: '#D8000C',
        open: true,
        message: 'Some error occured'
      })
    }).finally(()=>setBtnSpinner(''))
  }

  const handleAdd = (regCode) => {
    setBtnSpinner(regCode)
    axios.post(`${baseURL}api/companies`, {
      "registryCode": regCode
    }).then((res) => {
      if (res.status == 201) {
        getCompaniesList()
      }
      else {
        setAlert({
          bgc: '#D8000C',
          open: true,
          message: 'Some error occured'
        })
      }
    }).catch(() => {
      setAlert({
        bgc: '#D8000C',
        open: true,
        message: 'Some error occured'
      })
    })
  }

  return (
    <div className="container">
      <div className="Header">
        <img src='./logo.png' />
      </div>
      <MyCompaniesInfo />
      <div className='companiesList'>
        { noData ? <EmptyData/> :
          companiesList.map((item) => <Company handleAdd={handleAdd} info={item} spinner={btnSpinner} key={item.registryCode} />)
        }
      </div>
      <Snackbar alert={alert} setAlert={setAlert} duration={2000} />
    </div>

  );
}

export default App;
