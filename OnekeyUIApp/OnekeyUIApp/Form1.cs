using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace OnekeyUIApp
{
    public partial class Form1 : Form
    {
        private string softWarePath=null; //软件启动路径
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {   
            GetSoftWare("GitHub Desktop", out softWarePath);
            if (softWarePath == null)
            {
                label1.Text = "GitHub Desktop 未找到，请确保 GitHub Desktop 被正确安装!";
            }
            else
            {
                button1.Enabled = true;
                UpdateButton2();
            }
        }
        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                StartProcess("GitHubDesktop.exe", softWarePath);
                System.Threading.Thread.Sleep(1000);
                string targetPath = ProcessPath("GitHubDesktop").Replace("GitHubDesktop.exe", "") + "resources\\app\\";
                label1.Text = targetPath;

                {//先将原文件备份
                    Backup(targetPath + "main.js", Environment.CurrentDirectory + "\\备份\\main.js", Environment.CurrentDirectory + "\\备份");
                    Backup(targetPath + "renderer.js", Environment.CurrentDirectory + "\\备份\\renderer.js", Environment.CurrentDirectory + "\\备份");
                }
                {//汉化文件替换原文件
                    if (File.Exists("Resources\\main.js"))
                    {
                        File.Copy("Resources\\main.js", targetPath + "main.js", true);
                        
                    }
                    if (File.Exists("Resources\\renderer.js"))
                    {
                        File.Copy("Resources\\renderer.js", targetPath + "renderer.js", true);
                    }
                }

                KillProcess("GitHubDesktop");
                StartProcess("GitHubDesktop.exe", softWarePath);
                label1.Text += "\n汉化完成";
                UpdateButton2();
            }
            catch (Exception ex)
            {
                label1.Text = ex.Message;
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            try
            {
                StartProcess("GitHubDesktop.exe", softWarePath);
                System.Threading.Thread.Sleep(1000);
                string targetPath = ProcessPath("GitHubDesktop").Replace("GitHubDesktop.exe", "") + "resources\\app\\";
                {//备份文件替换原文件夹文件
                    File.Copy(Environment.CurrentDirectory + "\\备份\\main.js", targetPath + "main.js", true);
                    File.Copy(Environment.CurrentDirectory + "\\备份\\renderer.js", targetPath + "renderer.js", true);
                }

                KillProcess("GitHubDesktop");
                StartProcess("GitHubDesktop.exe", softWarePath);
                label1.Text += "\n还原完成";
            }
            catch (Exception ex)
            {
                label1.Text = ex.Message;
            }
        }

        /// <summary>
        /// 文件备份
        /// </summary>
        /// <param name="sourcefile"> 原文件绝对路径</param>
        /// <param name="targetfile"> 备份文件绝对路径</param>
        /// <param name="targetPath"> 备份文件夹绝对路径</param>
        private static void Backup(string sourcefile, string targetfile, string targetPath)
        {
            if (!Directory.Exists(targetPath))
            {
                Directory.CreateDirectory(targetPath);//目标文件不存在
            }
            File.Copy(sourcefile, targetfile, true);
        }

        /// <summary>
        /// 软件是否安装
        /// </summary>
        /// <param name="softWareName"> 软件名称</param>
        /// <param name="softWarePath"> 安装路径</param>
        /// <returns> true or false </returns>
        private static bool GetSoftWare(string softWareName, out string softWarePath)
        {
            softWarePath = null;
            List<RegistryKey> RegistryKeys = new List<RegistryKey>
            {
                Registry.ClassesRoot,
                Registry.CurrentConfig,
                Registry.CurrentUser,
                Registry.LocalMachine,
                Registry.PerformanceData,
                Registry.Users
            };
            Dictionary<string, string> Softwares = new Dictionary<string, string>();
            string SubKeyName = @"Software\Microsoft\Windows\CurrentVersion\Uninstall";
            foreach (RegistryKey Registrykey in RegistryKeys)
            {
                using (RegistryKey RegistryKey1 = Registrykey.OpenSubKey(SubKeyName, false))
                {
                    if (RegistryKey1 == null) // 判断对象不存在
                        continue;
                    if (RegistryKey1.GetSubKeyNames() == null)
                        continue;
                    string[] KeyNames = RegistryKey1.GetSubKeyNames();
                    foreach (string KeyName in KeyNames)// 遍历子项名称的字符串数组
                    {
                        using (RegistryKey RegistryKey2 = RegistryKey1.OpenSubKey(KeyName, false)) // 遍历子项节点
                        {
                            if (RegistryKey2 == null)
                                continue;
                            string SoftwareName = RegistryKey2.GetValue("DisplayName", "").ToString(); // 获取软件名
                            string InstallLocation = RegistryKey2.GetValue("InstallLocation", "").ToString(); // 获取安装路径
                            if (!string.IsNullOrEmpty(InstallLocation)
                             && !string.IsNullOrEmpty(SoftwareName))
                            {
                                if (!Softwares.ContainsKey(SoftwareName))
                                    Softwares.Add(SoftwareName, InstallLocation);
                            }
                        }
                    }
                }
            }
            if (Softwares.Count <= 0)
                return false;
            foreach (string SoftwareName in Softwares.Keys)
            {
                if (SoftwareName.Contains(softWareName))
                {
                    softWarePath = Softwares[SoftwareName];
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// 打开进程
        /// </summary>
        /// <param name="exeName"> 可执行文件名(".exe")</param>
        /// <param name="SoftWarePath"> 软件路径</param>
        private static void StartProcess(string exeName, string SoftWarePath)
        {
            ProcessStartInfo info = null;
            info = new ProcessStartInfo
            {
                FileName = exeName,
                WorkingDirectory = SoftWarePath
            };
            Process.Start(info);
        }

        /// <summary>
        /// 获取进程路径
        /// </summary>
        /// <param name="processName "> 进程名</param>
        /// <returns> 进程路径</returns>
        private static string ProcessPath(string processName)
        {
            Process[] localByName = Process.GetProcessesByName(processName);
            string processPath = "";
            foreach (Process p in localByName)
            {
                processPath = p.MainModule.FileName.ToString();
            }
            return processPath;
        }

        /// <summary>
        /// 关闭进程
        /// </summary>
        /// <param name="processName">进程名</param>
        private static void KillProcess(string processName)
        {
            Process[] myproc = Process.GetProcesses();
            foreach (Process item in myproc)
            {
                if (item.ProcessName == processName)
                {
                    item.Kill();
                }
            }
        }

        /// <summary>
        /// 刷新汉化按钮状态
        /// </summary>
        private void UpdateButton2()
        {
            if (!Directory.Exists(Environment.CurrentDirectory + "\\备份"))
            {
                button2.Enabled = false;
            }
            else
            {
                button2.Enabled = true;
            }
        }
    }
}
