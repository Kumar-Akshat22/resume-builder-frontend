import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Trash2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PortfolioForm({
  isEditable,
  initialData,
  onSave
}) {
  const [formData, setFormData] = useState({
    ...initialData,
    skills: {
      technicalSkills: initialData.skills?.technicalSkills || [],
      softSkills: initialData.skills?.softSkills || []
    }
  });

  const [template, setTemplate] = useState(formData.template);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...(prev[section]),
        [field]: value
      }
    }))
  }

  const handleArrayInputChange = (section, index, field, value) => {
    setFormData(prev => {
      const [mainSection, subSection] = section.split('.');
      if (subSection) {
        return {
          ...prev,
          [mainSection]: {
            ...prev[mainSection],
            [subSection]: (prev[mainSection])[subSection].map((item, i) =>
              i === index ? { ...item, [field]: value } : item)
          }
        };
      } else {
        return {
          ...prev,
          [section]: (prev[section]).map((item, i) =>
            i === index ? { ...item, [field]: value } : item)
        };
      }
    });
  };

  const addNewEntry = (section, skillType) => {
    setFormData(prev => {
      if (section === 'skills') {
        if (skillType === 'technical') {
          return {
            ...prev,
            skills: {
              ...prev.skills,
              technicalSkills: [...prev.skills.technicalSkills, { label: '', emoji: '', logoUrl: '' }]
            }
          };
        } else if (skillType === 'soft') {
          return {
            ...prev,
            skills: {
              ...prev.skills,
              softSkills: [...prev.skills.softSkills, { label: '', emoji: '' }]
            }
          };
        }
      } else if (Array.isArray(prev[section])) {
        return {
          ...prev,
          [section]: [...(prev[section]), getEmptyEntry(section)]
        };
      }
      return prev;
    });
  };

  const deleteEntry = (section, index, skillType) => {
    setFormData(prev => {
      if (section === 'skills') {
        const skillsSection = skillType === 'technical' ? 'technicalSkills' : 'softSkills';
        return {
          ...prev,
          skills: {
            ...prev.skills,
            [skillsSection]: prev.skills[skillsSection].filter((_, i) => i !== index)
          }
        };
      } else if (Array.isArray(prev[section])) {
        return {
          ...prev,
          [section]: (prev[section]).filter((_, i) => i !== index)
        };
      }
      return prev;
    });
  };

  const getEmptyEntry = (section) => {
    switch (section) {
      case 'education':
        return {
          instituteName: '',
          location: '',
          startDate: '',
          endDate: '',
          degree: '',
          specialization: '',
          imageUrl: ''
        };
      case 'experience':
        return {
          jobRole: '',
          companyName: '',
          startDate: '',
          endDate: '',
          description: ['']
        };
      case 'projects':
        return {
          title: '',
          description: [''],
          techStack: [],
          imageUrl: [],
          githubUrl: '',
          liveUrl: '',
          startDate: '',
          endDate: ''
        };
      default:
        return {};
    }
  };

  const renderInput = (label, value, onChange, type = 'text') => (
    <div className="mb-4">
      <Label htmlFor={label}>{label}</Label>
      {isEditable ? (
        <Input
          id={label}
          type={type}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1" />
      ) : (
        <p className="mt-1">{value || 'N/A'}</p>
      )}
    </div>
  )

  const renderImagePreview = (url, alt) => (
    <div className="mt-2">
      {url ? (
        <img src={url} alt={alt} width={100} height={100} className="rounded-md" />
      ) : (
        <p>No image available</p>
      )}
    </div>
  )

  const handleTemplateChange = (value) => {
    setTemplate(value);
    // Here you would typically apply the template changes to your form data
    setFormData(prev=>({...prev, template:value}))
    console.log(`Template changed to: ${value}`);
  };

  return (
    (<form onSubmit={(e) => { e.preventDefault(); onSave(formData); }}>
      <Tabs defaultValue="socialLinks" className="w-full">
        <TabsList>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="personalInfo">Personal Info</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="socialLinks">
          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(formData.socialLinks).map(([key, value]) => (
                renderInput(key, value, (newValue) => handleInputChange('socialLinks', key, newValue))
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personalInfo">
          <Card>
            <CardHeader>
              <CardTitle>Personal Info</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(formData.personalInfo).map(([key, value]) => (
                <React.Fragment key={key}>
                  {key === 'profilePhotoUrl' ? (
                    <>
                      {renderInput(key, value, (newValue) => handleInputChange('personalInfo', key, newValue))}
                      {renderImagePreview(value, 'Profile Photo')}
                    </>
                  ) : key === 'jobProfiles' ? (
                    <div className="mb-4">
                      <Label htmlFor={key}>{key}</Label>
                      {isEditable ? (
                        <Textarea
                          id={key}
                          value={(value).join(', ')}
                          onChange={(e) => handleInputChange('personalInfo', key, e.target.value.split(', '))}
                          className="mt-1" />
                      ) : (
                        <p className="mt-1">{(value).join(', ') || 'N/A'}</p>
                      )}
                    </div>
                  ) : (
                    renderInput(key, value, (newValue) => handleInputChange('personalInfo', key, newValue))
                  )}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
              {(formData.skills?.technicalSkills || []).map((skill, index) => (
                <div key={index} className="mb-4 relative">
                  {renderInput(
                    `Technical Skill ${index + 1}`,
                    skill.label,
                    (newValue) => handleArrayInputChange('skills.technicalSkills', index, 'label', newValue)
                  )}
                  {renderInput(
                    `Emoji ${index + 1}`,
                    skill.emoji,
                    (newValue) => handleArrayInputChange('skills.technicalSkills', index, 'emoji', newValue)
                  )}
                  {renderInput(
                    `Logo URL ${index + 1}`,
                    skill.logoUrl,
                    (newValue) => handleArrayInputChange('skills.technicalSkills', index, 'logoUrl', newValue)
                  )}
                  {renderImagePreview(skill.logoUrl, `Technical Skill ${index + 1} Logo`)}
                  {isEditable && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-0 right-0"
                      onClick={() => deleteEntry('skills', index, 'technical')}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {isEditable && (
                <Button
                  type="button"
                  onClick={() => addNewEntry('skills', 'technical')}
                  className="mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Technical Skill
                </Button>
              )}

              <h3 className="text-lg font-semibold mb-2 mt-8">Soft Skills</h3>
              {(formData.skills?.softSkills || []).map((skill, index) => (
                <div key={index} className="mb-4 relative">
                  {renderInput(
                    `Soft Skill ${index + 1}`,
                    skill.label,
                    (newValue) => handleArrayInputChange('skills.softSkills', index, 'label', newValue)
                  )}
                  {renderInput(
                    `Emoji ${index + 1}`,
                    skill.emoji,
                    (newValue) => handleArrayInputChange('skills.softSkills', index, 'emoji', newValue)
                  )}
                  {isEditable && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-0 right-0"
                      onClick={() => deleteEntry('skills', index, 'soft')}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {isEditable && (
                <Button
                  type="button"
                  onClick={() => addNewEntry('skills', 'soft')}
                  className="mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Soft Skill
                </Button>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              {formData.education.map((edu, index) => (
                <div key={index} className="mb-8 border-b pb-4 relative">
                  <h3 className="text-lg font-semibold mb-2">Education {index + 1}</h3>
                  {Object.entries(edu).map(([key, value]) => (
                    <React.Fragment key={key}>
                      {key === 'imageUrl' ? (
                        <>
                          {renderInput(
                            key,
                            value,
                            (newValue) => handleArrayInputChange('education', index, key, newValue)
                          )}
                          {renderImagePreview(value, `Education ${index + 1} Image`)}
                        </>
                      ) : (
                        renderInput(
                          key,
                          value,
                          (newValue) => handleArrayInputChange('education', index, key, newValue)
                        )
                      )}
                    </React.Fragment>
                  ))}
                  {isEditable && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-0 right-0"
                      onClick={() => deleteEntry('education', index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {isEditable && (
                <Button type="button" onClick={() => addNewEntry('education')} className="mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Education
                </Button>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              {formData.experience.map((exp, index) => (
                <div key={index} className="mb-8 border-b pb-4 relative">
                  <h3 className="text-lg font-semibold mb-2">Experience {index + 1}</h3>
                  {Object.entries(exp).map(([key, value]) => (
                    <React.Fragment key={key}>
                      {key === 'description' ? (
                        <div className="mb-4">
                          <Label htmlFor={`description-${index}`}>Description</Label>
                          {isEditable ? (
                            <Textarea
                              id={`description-${index}`}
                              value={(value).join('\n')}
                              onChange={(e) => handleArrayInputChange('experience', index, key, e.target.value.split('\n'))}
                              className="mt-1" />
                          ) : (
                            <ul className="mt-1 list-disc pl-5">
                              {(value).map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        renderInput(
                          key,
                          value,
                          (newValue) => handleArrayInputChange('experience', index, key, newValue)
                        )
                      )}
                    </React.Fragment>
                  ))}
                  {isEditable && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-0 right-0"
                      onClick={() => deleteEntry('experience', index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {isEditable && (
                <Button type="button" onClick={() => addNewEntry('experience')} className="mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Experience
                </Button>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              {formData.projects.map((project, index) => (
                <div key={index} className="mb-8 border-b pb-4 relative">
                  <h3 className="text-lg font-semibold mb-2">Project {index + 1}</h3>
                  {Object.entries(project).map(([key, value]) => (
                    <React.Fragment key={key}>
                      {key === 'techStack' ? (
                        <div className="mb-4">
                          <Label htmlFor={`techStack-${index}`}>Tech Stack <span className=''>(Seperated by ";" Use <span className='bg-stone-400 px-2 py-1 rounded-md text-gray-800'>Ctrl + ⌫</span>) for remove skill</span></Label>
                          {isEditable ? (
                            <Textarea
                              id={`techStack-${index}`}
                              value={(value).map((tech) => `${tech.title}`).join('; ')}
                              onChange={(e) => {
                                const newValue = e.target.value.split(';').map(item => {
                                  const [title, emoji] = item.split('|').map(s => s.trim());
                                  return { title: title || '' };
                                });
                                handleArrayInputChange('projects', index, key, newValue);
                              }}
                              className="mt-1" />
                          ) : (
                            <p className="mt-1">
                              {(value).map((tech) => `${tech.title} ${tech.emoji || ''}`).join(', ') || 'N/A'}
                            </p>
                          )}
                        </div>
                      ) : key === 'description' ? (
                        <div className="mb-4">
                          <Label htmlFor={`description-${index}`}>Description</Label>
                          {isEditable ? (
                            <Textarea
                              id={`description-${index}`}
                              value={(value).join('\n')}
                              onChange={(e) => handleArrayInputChange('projects', index, key, e.target.value.split('\n'))}
                              className="mt-1" />
                          ) : (
                            <ul className="mt-1 list-disc pl-5">
                              {(value).map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : key === 'imageUrl' ? (
                        <div className="mb-4">
                          <Label htmlFor={`imageUrl-${index}`}>Image URLs</Label>
                          {isEditable ? (
                            <Textarea
                              id={`imageUrl-${index}`}
                              value={(value).join(', ')}
                              onChange={(e) => handleArrayInputChange('projects', index, key, e.target.value.split(', '))}
                              className="mt-1" />
                          ) : (
                            <div className="mt-1 flex flex-wrap gap-2">
                              {(value).map((url, i) => (
                                renderImagePreview(url, `Project ${index + 1} Image ${i + 1}`)
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        renderInput(
                          key,
                          value,
                          (newValue) => handleArrayInputChange('projects', index, key, newValue)
                        )
                      )}
                    </React.Fragment>
                  ))}
                  {isEditable && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-0 right-0"
                      onClick={() => deleteEntry('projects', index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {isEditable && (
                <Button type="button" onClick={() => addNewEntry('projects')} className="mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Project
                </Button>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label htmlFor="templateSelect">Template</Label>
                {isEditable ? (
                  <Select onValueChange={handleTemplateChange} value={template}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Template Light 01">LIGHT TEMPLATE 01</SelectItem>
                      <SelectItem value="Template Dark 01">DARK TEMPLATE 01</SelectItem>
                      {/* <SelectItem value="classic">Classic</SelectItem> */}
                      {/* <SelectItem value="minimalist">Minimalist</SelectItem> */}
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="mt-1">{template}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {isEditable && (
        <Button type="submit" className="mt-4">Save</Button>
      )}
    </form>)
  );
}

