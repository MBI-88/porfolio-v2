"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { Language } from '@/app/interfaces/languge_interface';
import { FC, useEffect, useReducer, useState } from 'react';
import { colors} from '@/app/utils/graph_colors'
import { CustumeState } from '@/app/utils/custom_hook';
import { ActionType } from '@/app/interfaces/reducer_interface';
import { GetAPIrepo } from '@/app/services/graphchart_service';
import Loader from '@/app/common/loader';


const apiRepo = process.env.NEXT_PUBLIC_GITHUB_API_REPO
const username = process.env.NEXT_PUBLIC_USERNAME

interface Props {
    name: Language
}

const ChartPie: FC<Props> = ({ name }) => {
    const [state,setState] = useReducer(CustumeState,{loading:true,error:false})
    const [chart,setChart] = useState({
        labels:["empty"],
        datasets: [
            {
            label: 'Values',
            data: [0],
            backgroundColor: ["#FF6384"],
            borderColor: ["#FF6384"],
            borderWidth: 1,

        }
        ],
    })
    const chartOption = {
        responsive: true,
        maintainAspectRatio: false,
    }
    const handlerChart = (info:Object) => {
        if (info !== null) {
            const colorCount = Object.keys(info).length
            setChart(
                {
                    labels: Object.keys(info),
                    datasets: [
                        {
                            label: 'Values',
                            data: Object.values(info),
                            backgroundColor: colors.slice(0, colorCount),
                            borderColor: colors.slice(0, colorCount),
                            borderWidth: 1,

                        }
                    ]
                    
                }
            )
        }
    }

    ChartJS.register(ArcElement, Tooltip, Legend);
    useEffect(() => {
        setState({ type: ActionType.Loading,loading:true,error:false })
        const url = `${apiRepo}${username}/${name}/languages`
        GetAPIrepo(url).then(respo => respo.json()).then(
            result => {
                if (!result["message"]){
                    handlerChart(result)
                    setState({ type:ActionType.Fetching,loading:true,error:false })
                }else{
                    setState({ type: ActionType.Error, loading: false, error: true })
                } 
            }
        ).catch( () => {
            setState({ type:ActionType.Error,loading:false,error:true })
        })

    },[name])

    return (
        <div className='flex flex-col p-2 items-center'>
            {
                state.loading ? <Loader /> : state.error ? <h4>Github api comsumed exceded</h4>:(
                    <Pie data={chart } options={chartOption}/>
                )
            }
        </div>
    )
}

export default ChartPie;