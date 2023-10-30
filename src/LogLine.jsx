import { Card, Divider } from "antd";
import React, { useEffect, useState } from "react";
import LogSeverityIcon from "./LogServerity";

export const LogLine = React.memo((props) => {
    const {log} = props;
    
    const [v, setV] = useState("");
    const [module, setModule] = useState("");
    const [time, setTime] = useState();
    const [severity, setSeverity] = useState();

    useEffect(() => {
        try {
            const j = JSON.parse(log);
            // console.log({j})
            setV(j.msg)
            setModule(j.module);
            setTime(j.time);
            setSeverity(j.severity);
        } catch (e) {
            console.error(e);
            setV(log)
        }
    }, [log])

    return (
        <Card title={<>
        <LogSeverityIcon severity={severity} />
<Divider type="vertical" />
        
        {new Date(time).toLocaleString()}

        <Divider type="vertical" />

        {module}</>} size="small"><pre>{v}</pre></Card>
    )
})