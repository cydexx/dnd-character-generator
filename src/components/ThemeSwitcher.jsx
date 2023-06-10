import React, { useEffect, useState } from "react"

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState("system")

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme")
        if (localTheme) {
            setTheme(localTheme)
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            setTheme("dark")
        }
    }, [])

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.add("light")
            document.documentElement.classList.remove("dark")
        } else if (theme === "dark") {
            document.documentElement.classList.add("dark")
            document.documentElement.classList.remove("light")
        }
        window.localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <select
            className="p-2 px-4 bg-indigo-700 text-white rounded-md"
            value={theme}
            onChange={(e) => setTheme(e.currentTarget.value)}
        >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    )
}
