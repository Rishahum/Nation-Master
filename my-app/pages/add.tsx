import { Add } from '../Components/Add'
import Addcountry from '@/pages/api/add'
import { Country } from '@/lib/types'

// type Props = {
//     countries: Country[]
//     onAddCountry: (country: string, capital: string) => void;
// }

// const AddPage = ({ countries }: Props) => {
//     <Add countries={ countries }
//     onAddCountry={} />
// }

// export const getStaticProps = async ({onAddCountry}: Props) => {
//     const countries = await Addcountry();
   
//     return {props: { countries }}
//    }
 
export default Add

