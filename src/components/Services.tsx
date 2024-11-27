import "@/style/services.css"
import { ShoppingCart } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { MonitorSmartphone } from 'lucide-react';
import { LayoutList } from 'lucide-react';
import { MonitorCog } from 'lucide-react';
import { SearchCode } from 'lucide-react';

const Services = () => {
  return (
    <section className="ser-main">
        <div className="ser-container">
            <div className="top-div">
        <h3 className="heading-ser">Services</h3>
        </div>
        <div className="bottom-div">
            <div className="box">{ <ShoppingCart size={120} strokeWidth={2} /> }
            <h3>E-Commerce Solutions</h3></div>
            <div className="box">{<CodeXml size={120} strokeWidth={2} />} 
            <h3>Web Development</h3></div>
            <div className="box">{<MonitorSmartphone size={120} strokeWidth={2} />} 
            <h3>UI/UX Design</h3></div>
            <div className="box">{<LayoutList size={120} />}
            <h3>Website Redesign</h3> </div>
            <div className="box">{<MonitorCog size={120} />} 
            <h3>API Integration</h3></div>
            <div className="box">{<SearchCode size={120} />}
            <h3>SEO</h3> </div>
        </div>
        </div>
    </section>
  )
}

export default Services
