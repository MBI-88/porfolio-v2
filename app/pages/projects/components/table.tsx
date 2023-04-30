import { FC } from 'react';
import { GitRepos } from '../../../interfaces/repo_inteface'
import ChartPie from './graph';

interface Props {
    data: GitRepos[]
}

const Table: FC<Props> = ({ data }) => {

    return (
        <div className='grid gap-3 lg:grid-cols-3 grid-cols-1 lg:ps-5'>
            {
                data ? data.map(el => (
                    <div key={el.id} className='shadow-lg rounded-lg p-2'>
                        <article className='block'>
                            <ChartPie name={el.name} />
                            <section className='flex flex-col flex-wrap items-start  pt-3'>
                                <span>
                                    Name:&nbsp;&nbsp;{el.name}
                                </span>
                                <span>
                                    Create at:&nbsp;&nbsp;{el.created_at}
                                </span>
                                <span>
                                    Updated at:&nbsp;&nbsp;{el.updated_at}
                                </span>
                                <span>
                                    Link:&nbsp;&nbsp;
                                    <a href={el.html_url} className='text-blue-500 hover:text-red-500'>
                                        <em>{el.full_name}</em>
                                    </a>
                                </span>
                                <span>
                                    Main language:&nbsp;&nbsp;{el.language}
                                </span>
                                <span>
                                    Description:&nbsp;&nbsp;{el.description}
                                </span>
                            </section>
                        </article>
                    </div>
                )) :
                    <div className='shadow-lg rounded-xl p-2'>
                        <h2>Github Api reached</h2>
                    </div>
            }
        </div>

    )
}
export default Table;