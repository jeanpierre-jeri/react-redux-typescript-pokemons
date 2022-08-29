import { CombatList } from '../molecules'

export const SideBar = () => {
  return (
    <div className="shadow-2xl shadow-red-500/50 h-full flex flex-col py-8 overflow-y-auto">
      <h1 className="uppercase text-center  text-2xl bg-transparent">Listos para el combate</h1>
      <CombatList />
    </div>
  )
}
