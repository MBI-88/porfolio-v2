
import { FC } from 'react';
import { GitRepos } from '../../../interfaces/repo_inteface'
import Table from './table';
import OnlineApp from './onlineapp';

interface Props {
    data: GitRepos[]
}

const Body: FC<Props> = ({ data }) => {
    return (
        <section className='container lg:px-64 md:px-20 px-10 mb-16'>
            <div className='pt-5 pb-5 lg:ps-20 ps-0 md:ps-16'>
                <Table data={data} />
            </div>
            <OnlineApp />
        </section>
    )
}

export default Body;