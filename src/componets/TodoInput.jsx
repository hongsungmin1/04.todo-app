import React from 'react'

function TodoInput({formData,onChange,onSubmit,onClick}){
    return (
    <form onSubmit={onSubmit}>
        <fieldset>
            <legend>Todo App</legend>
        <div className="d-flex flex-column gap-1 container justify-content-center">
            <div className="d-flex justify-content-between">
                <button type="button" onClick={onClick} className="btn btn-color" data-color="red">free time</button>
                <button type="button" onClick={onClick} className="btn" data-color="blue">travel</button>
                <button type="button" onClick={onClick} className="btn" data-color="green">meting</button>
                <button type="button" onClick={onClick} className="btn" data-color="black">atc</button>
            </div>
            <input type="text" placeholder="제목" name="title" value={formData.title} onChange={onChange}/>
            <textarea rows="5" name="desc" clos="20" placeholder="내용" value={formData.desc} onChange={onChange} ></textarea>
            <div className="d-flex gap-1 align-items-center justify-content-between">
                <label htmlFor="start-date">시작일 </label>
                <input type="date" id="start" name="start" value={formData.start}  onChange={onChange} className="m-0" />
                <label htmlFor="end-date">종료일 </label>
                <input type="date" id="end" name="end" value={formData.end} onChange={onChange} className="m-0"/>
            </div>
                <div className='d-flex gap-1 align-items-center justify-content-between'>
                    <label className='d-flex gap-1'>인 원</label>
                    <input min="0" max="20" type="number" id='participant' name='participant' onChange={onChange} />
                </div>
                <input type="submit" value="등록" className='btn-active'/>
        </div>
        </fieldset>
    </form>
    )
}

export default TodoInput