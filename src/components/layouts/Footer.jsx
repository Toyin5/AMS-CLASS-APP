import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    <strong>AMS</strong> by <a href="https://jgthms.com">Toyin Muhammed</a>. The source code is hosted on
                    <a href="http://opensource.org/licenses/mit-license.php"> <FaGithub /> github</a>.
                </p>
            </div>
        </footer>
    )
}
