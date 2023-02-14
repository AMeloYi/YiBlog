import CONFIG from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">🌟 Service</div>
        <ul className="rounded-2xl mb-9 bg-white dark:bg-zinc-700 p-1 flex flex-col">
          {
            CONFIG.projects.map((item, idx) => (
              <a
                href={`${item.href}`}
                rel="noreferrer"
                target="_blank"
                className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
              >
                <AiFillCodeSandboxCircle className="text-2xl" />
                <div className="text-sm">{item.name}</div>
              </a>
            ))
          }
      </ul>
    </>
  )
}

export default ServiceCard
