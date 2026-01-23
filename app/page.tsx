import { Button } from "@/components/ui/button"
import Sidebar, {SidebarItem} from "@/components/Sidebar"
import { LucideAArrowDown, LucideEarth, LucideFolderOpen, LucideGithub, LucideLibrary, LucideLibraryBig, LucideLinkedin, LucideMail, LucideRss, LucideUser } from "lucide-react"

export default function Home() {
  return (
    <main className="flex h-full w-full">
      <Sidebar>
        <SidebarItem icon={<LucideUser />} text="About me" active={true} alert={false}/>
        <SidebarItem icon={<LucideEarth/>} text="Experience" active={true} alert={false}/>
        <SidebarItem icon={<LucideFolderOpen/>} text="Projects" active={true} alert={false}/>
        <hr />
        {/* <span>Connections</span> */}
        <SidebarItem icon={<LucideMail/>} text="Email" active={true} alert={false}/>
        <SidebarItem icon={<LucideGithub/>} text="Github" active={true} alert={false}/>
        <SidebarItem icon={<LucideLinkedin/>} text="LinkedIn" active={true} alert={false}/>
        <hr/>
        {/* <span>Resources</span> */}
        <SidebarItem icon={<LucideLibraryBig/>} text="Books" active={true} alert={false}/>
        <SidebarItem icon={<LucideRss/>} text="Websites" active={true} alert={false}/>

      </Sidebar>
      <div>
        <Button>Click meaaaaaaaaaaaaa</Button>
      </div>
    </main>
  )
}