import BoardRegister from '../../../src/components/units/boards/register/BoardRegister.container'

export default function Board() {

    return (
        <>
            {BoardRegister({ isEdit: false })}
        </>
            // <BoardRegister isEdit={false}/>
    )
}