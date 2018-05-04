/* Wazuh Agent list from Wazuh Server */
export interface WazuhAgentList_Os {
    major:          string; //
    uname:          string; //
    platform:       string;
    version:        string;
    name:           string;
    codename:       string; //
    arch:           string; //
}

export interface WazuhAgentList_Item {
    status:         string;
    configSum:      string; //
    group:          string; //
    name:           string;
    mergedSum:      string; //
    ip:             string;
    dateAdd:        string;
    version:        string;
    manager_host:   string; //
    lastKeepAlive:  string;
    os:             WazuhAgentList_Os;
    id:             string;
}

export interface WazuhAgentList_Data {
    totalItems:     number;
    items:          WazuhAgentList_Item[];
}

export interface WazuhAgentList {
    error : string;
    data : WazuhAgentList_Data;
}
/* Wazuh manager status from Wazuh Server */
export interface WazuhManagerStatus_Data {
    "wazuh-modulesd":       string;
    "ossec-authd":          string;
    "wazuh-clusterd":       string;
    "ossec-monitored":      string;
    "ossec-logcollector":   string;
    "ossec-execd":          string;
    "ossec-remoted":        string;
    "ossec-syscheckd":      string;
    "ossec-analysisd":      string;
    "ossec-maild":          string;
}

export interface WazuhManagerStatus {
    error : string;
    data : WazuhManagerStatus_Data;
}