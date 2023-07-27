
import { FC } from 'react';
import { GitRepos } from '../interfaces/repo_inteface'
import Table from './table';
import OnlineApp from './onlineapp';

type Props = {
    data: GitRepos[]
}

const Body: FC<Props> = ({ data }) => {
    return (
        <section className='block px-10 lg:px-36 mb-16 mt-10'>
            <div className='pt-5 pb-5'>
                <Table data={data} />
            </div>
            <OnlineApp />
        </section>
    )
}

export default Body;