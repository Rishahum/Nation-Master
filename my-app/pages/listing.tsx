import {Listing} from '../Components/Listing'
import Countries from '@/pages/api/countries'
import { Country } from '@/lib/types'

type Props = {
    countries: Country[]
}

const ListingPage = ({ countries }: Props) => {
    <Listing countries={ countries }  />
}

export const getStaticProps = async () => {
    const countries = await Countries();
   
    return {props: { countries }}
   }
export default Listing