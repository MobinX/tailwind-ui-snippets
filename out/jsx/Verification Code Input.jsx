<><div>
    <label className="text-base-content">Verification code</label>
    <div id="fields" className="mt-2 flex items-center gap-x-2">
        <input type="text" data-index="0" placeholder="0" className="w-12 h-12 rounded-lg border focus:border-primary outline-none text-center text-2xl" />
        <input type="text" data-index="1" placeholder="0" className="w-12 h-12 rounded-lg border focus:border-primary outline-none text-center text-2xl" />
        <input type="text" data-index="2" placeholder="0" className="w-12 h-12 rounded-lg border focus:border-primary outline-none text-center text-2xl" />
        <input type="text" data-index="3" placeholder="0" className="w-12 h-12 rounded-lg border focus:border-primary outline-none text-center text-2xl" />
    </div>
</div>

<script>{`
    const fieldsRef = document.getElementById("fields");
    const state = {
        code1: "",
        code2: "",
        code3: "",
        code4: ""
    };

    fieldsRef.addEventListener("keyup", (e) => {
        const target = e.target;
        const dataIndex = +target.getAttribute("data-index");

        if ((e.key === "Delete" || e.key === "Backspace")) {
            const next = dataIndex - 1;
            if (next > -1) {
                fieldsRef.children[next].focus();
            }
        } else {
            const next = dataIndex + 1;
            if (next < fieldsRef.children.length && target.value !== " " && target.value !== "" && e.key.length === 1) {
                fieldsRef.children[next].focus();
            }
        }
    });

    fieldsRef.addEventListener("input", (e) => {
        const target = e.target;
        const dataIndex = +target.getAttribute("data-index");
        const codeNumber = "code" + (dataIndex + 1);
        const value = target.value.slice(target.value.length - 1);
        state[codeNumber] = value;
        target.value = state[codeNumber];
    });
`}</script></>