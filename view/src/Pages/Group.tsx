import {useParams} from 'react-router-dom';


function Group() {
    const { groupId } = useParams();


    return (
        <div>
            {groupId}
        </div>
    )
}

export default Group;