
import { Home } from '@/Components/Home'
import getCountries from '@/pages/api/countries'
import { Country } from '@/lib/types'

type Props = {
    countries: Country[]
}

const HomePage = ({ countries }: Props) => {
    <Home countries={ countries } />
}

export const getStaticProps = async () => {
    const countries = await getCountries();
   
    return {props: { countries }}
   }

export default Home