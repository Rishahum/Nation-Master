import { GetServerSidePropsContext } from 'next'
import { Edit } from '../../Components/Edit'
import get from '@/pages/api/get'
import getCountries from '@/pages/api/countries'
import { Country } from '@/lib/types'


type Props = {
    country: Country
}

const HomePage = ({ country }: Props) => {
    <Edit country={ country } />
}

export async function getStaticProps(ctx: GetServerSidePropsContext) {
    const country = await get(ctx?.params?.id as string)
    
    return {
        props: {
            country
        }
    };
}
  
export async function getStaticPaths() {
    const countries = await getCountries();

    return {
        paths: countries.map((country: Country) => ({
            params: { id: country._id },
        })),
        fallback: false,
    }
}

export default Edit;
