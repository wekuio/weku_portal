
import {community_host_map, community_language_map} from "../client_config";

export function getCommunity(host) {
    let community = false;
    if(community_host_map[host])
        community = community_host_map[host];
    return community;
}

 export function getCommunityLanguage(host) {
    let language = "en";
    if(community_language_map[host])
        language = community_language_map[host];
    return language;
}
