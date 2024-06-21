import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { invoke } from '@tauri-apps/api'
import { Client } from '@/models/client'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  phone: z.string().min(3).max(255),
  birthday: z.string(),
})

interface RegisterClientFormProps {
  onOpenChange: () => void
}

export default function RegisterClientForm({ onOpenChange }: RegisterClientFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      email: undefined,
      phone: undefined,
      birthday: undefined,
    },
  })

  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    invoke<Client>('register_new_client', { dto: { ...values } })
      .then((response) => {
        console.log(response)
        form.reset()
        toast({
          title: 'Client registered successfully!',
          description: `Id: ${response.id}`,
        })
        onOpenChange()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-2 w-full '
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className=''>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className=''>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className=''>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthday"
          render={({ field }) => (
            <FormItem className=''>
              <FormLabel>Birth Date</FormLabel>
              <FormControl>
                <Input type='date' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full mt-4'>Register</Button>
      </form>
    </Form>
  )
}