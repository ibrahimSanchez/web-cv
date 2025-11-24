import { motion } from "framer-motion"
import { Menu, Moon, Sun } from "lucide-react"
import { Globe, X } from "lucide-react"
import { Button } from "../button"
import { useTheme } from "@/components/contexts/theme-provider"

interface Props {
  setIsOpen: (open: boolean) => void
  isOpen: boolean
}

export const NavbarActions = ({ isOpen, setIsOpen }: Props) => {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme()

  return (

<div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full hover:text-white">
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="default" onClick={toggleLanguage} className="rounded-full hover:text-white">
              <Globe className="w-5 h-5" />
              <span className="text-xs ml-1">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 transition-transform duration-200 hover:scale-110" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <motion.div
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </button>
          </div>
)
}
