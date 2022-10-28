import React from 'react'
import './ModerTool.scss'

export default function Modertool({setVisibleModal}) {

  return (
    <div class="ModerTool">
		<div class="ModerTool-edit" onClick={()=>setVisibleModal(true)}><img src="img/moder/edit.svg" alt="edit"/></div>
		<div class="ModerTool-delete"><img src="img/moder/delete.svg" alt="delete"/></div>
	</div>
  )
}
