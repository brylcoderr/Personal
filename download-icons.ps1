$icons = @{
    "react.png" = "https://img.icons8.com/color/96/react-native.png"
    "nextjs.png" = "https://img.icons8.com/color/96/nextjs.png"
    "tailwind.png" = "https://img.icons8.com/color/48/tailwind_css.png"
    "redux.png" = "https://img.icons8.com/color/96/redux.png"
    "mui.png" = "https://img.icons8.com/color/96/material-ui.png"
    "openai.png" = "https://img.icons8.com/ios-glyphs/30/chatgpt.png"
    "claude.png" = "https://img.icons8.com/fluency/48/claude-ai.png"
    "n8n.svg" = "https://cdn.simpleicons.org/n8n/FF6D5A"
    "make.svg" = "https://cdn.simpleicons.org/make/EA3860"
    "python.png" = "https://img.icons8.com/color/96/python.png"
    "nodejs.png" = "https://img.icons8.com/color/96/nodejs.png"
    "nestjs.png" = "https://img.icons8.com/color/48/nestjs.png"
    "graphql.png" = "https://img.icons8.com/color/96/graphql.png"
    "console.png" = "https://img.icons8.com/3d-fluency/94/console.png"
    "socketio.svg" = "https://cdn.simpleicons.org/socketdotio/black"
    "load-balancer.png" = "https://img.icons8.com/color/96/load-balancer.png"
    "optimization.png" = "https://img.icons8.com/external-jumpicon-solid-gradient-ayub-irawan/32/external-Optimization-crisis-management-jumpicon-(solid-gradient)-jumpicon-solid-gradient-ayub-irawan.png"
    "activity.png" = "https://img.icons8.com/color/96/activity.png"
    "layers.png" = "https://img.icons8.com/color/96/layers.png"
    "cyber-security.png" = "https://img.icons8.com/fluency/48/cyber-security.png"
    "docker.png" = "https://img.icons8.com/color/96/docker.png"
    "aws.png" = "https://img.icons8.com/color/96/amazon-web-services.png"
    "vercel.png" = "https://img.icons8.com/color/96/vercel.png"
    "git.png" = "https://img.icons8.com/color/96/git.png"
    "database.png" = "https://img.icons8.com/color/96/database.png"
    "nextjs-icon.svg" = "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg"
    "typescript-icon.svg" = "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
    "nodejs-icon.svg" = "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
    "react-icon.svg" = "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
    "zapier.png" = "https://img.icons8.com/color/96/zapier.png"
    "framer.png" = "https://img.icons8.com/color/96/framer.png"
    "postgresql.png" = "https://img.icons8.com/color/96/postgreesql.png"
    "redis.png" = "https://img.icons8.com/color/96/redis.png"
}

$outDir = "d:\Personal-main\public\icons"
$total = $icons.Count
$done = 0

foreach ($item in $icons.GetEnumerator()) {
    $done++
    $outPath = Join-Path $outDir $item.Key
    try {
        Invoke-WebRequest -Uri $item.Value -OutFile $outPath -TimeoutSec 10
        Write-Host "[$done/$total] OK: $($item.Key)"
    } catch {
        Write-Host "[$done/$total] FAIL: $($item.Key) - $($_.Exception.Message)"
    }
}
Write-Host "Done! Downloaded $done icons."
