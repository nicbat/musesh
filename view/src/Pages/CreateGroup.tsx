import {useParams} from 'react-router-dom';


function CreateGroup() {
    const { groupId } = useParams();


    return (
        <div>
            {groupId}
        </div>
    )
}

export default CreateGroup;