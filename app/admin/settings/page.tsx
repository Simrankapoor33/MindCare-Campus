"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

// Custom SVG components
const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
  </svg>
)

const BellIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
)

const DatabaseIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
    <path d="M4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
  </svg>
)

const SaveIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
  </svg>
)

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    // General Settings
    institutionName: "MindCare University",
    adminEmail: "admin@mindcare.edu",
    timezone: "Asia/Kolkata",
    language: "English",

    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    alertThreshold: 75,

    // Security Settings
    twoFactorAuth: true,
    sessionTimeout: 30,
    passwordPolicy: "strong",

    // System Settings
    maintenanceMode: false,
    backupFrequency: "daily",
    dataRetention: 365,

    // Privacy Settings
    dataSharing: false,
    anonymousAnalytics: true,
    cookieConsent: true,
  })

  const handleSave = () => {
    // Handle save logic here
    console.log("Settings saved:", settings)
  }

  const systemHealth = {
    database: 98,
    server: 95,
    storage: 87,
    network: 92,
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">System Settings</h1>
          <p className="text-purple-200">Configure system preferences and administrative controls</p>
        </div>
        <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700 text-white">
          <SaveIcon />
          <span className="ml-2">Save Changes</span>
        </Button>
      </div>

      {/* System Health Overview */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <DatabaseIcon />
            System Health
          </CardTitle>
          <CardDescription className="text-purple-200">Current system performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(systemHealth).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white capitalize">{key}</span>
                  <span className="text-purple-200 text-sm">{value}%</span>
                </div>
                <Progress value={value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <SettingsIcon />
              General Settings
            </CardTitle>
            <CardDescription className="text-purple-200">Basic system configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="institutionName" className="text-white">
                Institution Name
              </Label>
              <Input
                id="institutionName"
                value={settings.institutionName}
                onChange={(e) => setSettings({ ...settings, institutionName: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adminEmail" className="text-white">
                Admin Email
              </Label>
              <Input
                id="adminEmail"
                type="email"
                value={settings.adminEmail}
                onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-white">
                Timezone
              </Label>
              <Select
                value={settings.timezone}
                onValueChange={(value) => setSettings({ ...settings, timezone: value })}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Kolkata">Asia/Kolkata (IST)</SelectItem>
                  <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                  <SelectItem value="Europe/London">Europe/London (GMT)</SelectItem>
                  <SelectItem value="Asia/Tokyo">Asia/Tokyo (JST)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language" className="text-white">
                Default Language
              </Label>
              <Select
                value={settings.language}
                onValueChange={(value) => setSettings({ ...settings, language: value })}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Hindi">Hindi</SelectItem>
                  <SelectItem value="Tamil">Tamil</SelectItem>
                  <SelectItem value="Bengali">Bengali</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BellIcon />
              Notification Settings
            </CardTitle>
            <CardDescription className="text-purple-200">Configure alert and notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white">Email Notifications</Label>
                <p className="text-sm text-purple-200">Receive alerts via email</p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white">SMS Notifications</Label>
                <p className="text-sm text-purple-200">Receive critical alerts via SMS</p>
              </div>
              <Switch
                checked={settings.smsNotifications}
                onCheckedChange={(checked) => setSettings({ ...settings, smsNotifications: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white">Push Notifications</Label>
                <p className="text-sm text-purple-200">Browser push notifications</p>
              </div>
              <Switch
                checked={settings.pushNotifications}
                onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="alertThreshold" className="text-white">
                Alert Threshold (%)
              </Label>
              <Input
                id="alertThreshold"
                type="number"
                min="0"
                max="100"
                value={settings.alertThreshold}
                onChange={(e) => setSettings({ ...settings, alertThreshold: Number.parseInt(e.target.value) })}
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
              />
              <p className="text-xs text-purple-200">Trigger alerts when wellness scores drop below this threshold</p>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <ShieldIcon />
              Security Settings
            </CardTitle>
            <CardDescription className="text-purple-200">System security and access controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white">Two-Factor Authentication</Label>
                <p className="text-sm text-purple-200">Require 2FA for admin access</p>
              </div>
              <Switch
                checked={settings.twoFactorAuth}
                onCheckedChange={(checked) => setSettings({ ...settings, twoFactorAuth: checked })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sessionTimeout" className="text-white">
                Session Timeout (minutes)
              </Label>
              <Input
                id="sessionTimeout"
                type="number"
                min="5"
                max="480"
                value={settings.sessionTimeout}
                onChange={(e) => setSettings({ ...settings, sessionTimeout: Number.parseInt(e.target.value) })}
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="passwordPolicy" className="text-white">
                Password Policy
              </Label>
              <Select
                value={settings.passwordPolicy}
                onValueChange={(value) => setSettings({ ...settings, passwordPolicy: value })}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                  <SelectItem value="strong">Strong (12+ chars, mixed case, numbers)</SelectItem>
                  <SelectItem value="complex">Complex (16+ chars, symbols required)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <DatabaseIcon />
              System Settings
            </CardTitle>
            <CardDescription className="text-purple-200">System maintenance and data management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white">Maintenance Mode</Label>
                <p className="text-sm text-purple-200">Enable system maintenance mode</p>
              </div>
              <Switch
                checked={settings.maintenanceMode}
                onCheckedChange={(checked) => setSettings({ ...settings, maintenanceMode: checked })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="backupFrequency" className="text-white">
                Backup Frequency
              </Label>
              <Select
                value={settings.backupFrequency}
                onValueChange={(value) => setSettings({ ...settings, backupFrequency: value })}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dataRetention" className="text-white">
                Data Retention (days)
              </Label>
              <Input
                id="dataRetention"
                type="number"
                min="30"
                max="2555"
                value={settings.dataRetention}
                onChange={(e) => setSettings({ ...settings, dataRetention: Number.parseInt(e.target.value) })}
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
              />
              <p className="text-xs text-purple-200">How long to retain user data and analytics</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Privacy & Compliance */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <UserIcon />
            Privacy & Compliance
          </CardTitle>
          <CardDescription className="text-purple-200">Data privacy and regulatory compliance settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white">Data Sharing</Label>
                <p className="text-sm text-purple-200">Allow anonymized data sharing for research</p>
              </div>
              <Switch
                checked={settings.dataSharing}
                onCheckedChange={(checked) => setSettings({ ...settings, dataSharing: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white">Anonymous Analytics</Label>
                <p className="text-sm text-purple-200">Collect anonymous usage statistics</p>
              </div>
              <Switch
                checked={settings.anonymousAnalytics}
                onCheckedChange={(checked) => setSettings({ ...settings, anonymousAnalytics: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white">Cookie Consent</Label>
                <p className="text-sm text-purple-200">Require cookie consent from users</p>
              </div>
              <Switch
                checked={settings.cookieConsent}
                onCheckedChange={(checked) => setSettings({ ...settings, cookieConsent: checked })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Configuration */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <GlobeIcon />
            Advanced Configuration
          </CardTitle>
          <CardDescription className="text-purple-200">Advanced system configuration options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="customCss" className="text-white">
              Custom CSS
            </Label>
            <Textarea
              id="customCss"
              placeholder="/* Add custom CSS styles here */"
              className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apiEndpoints" className="text-white">
              Custom API Endpoints
            </Label>
            <Textarea
              id="apiEndpoints"
              placeholder="Configure custom API endpoints (JSON format)"
              className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 min-h-[80px]"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
